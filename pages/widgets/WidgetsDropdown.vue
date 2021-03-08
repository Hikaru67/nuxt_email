<template>
  <div>
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown color="primary" :header="dataCandidate.length" text="Ứng viên tham gia">
          <template #default>
            <CDropdown
                color="transparent p-0"
                placement="bottom-end"
            >
              <template #toggler-content>
                <CIcon name="cil-settings"/>
              </template>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdown>
          </template>
          <template #footer>
            <CChartLineSimple
                pointed
                class="mt-3 mx-3"
                style="height:70px"
                :data-points="listCountCandidate"
                point-hover-background-color="primary"
                label="Members"
                labels="months"
            />
          </template>
        </CWidgetDropdown>
      </CCol>
          <CCol sm="6" lg="3">
            <CWidgetDropdown color="info" :header="dataCandidateThank.length" text="Ứng viên đã phỏng vấn">
              <template #default>
                <CDropdown
                    color="transparent p-0"
                    placement="bottom-end"
                    :caret="false"
                >
                  <template #toggler-content>
                    <CIcon name="cil-location-pin"/>
                  </template>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>
              <template #footer>
                <CChartLineSimple
                    pointed
                    class="mt-3 mx-3"
                    style="height:70px"
                    :data-points="listCountCandidateThank"
                    point-hover-background-color="info"
                    :options="{ elements: { line: { tension: 0.00001 }}}"
                    label="Members"
                    labels="months"
                />
              </template>
            </CWidgetDropdown>
          </CCol>
          <CCol sm="6" lg="3">
            <CWidgetDropdown
                color="warning"
                :header="dataHistory.length"
                text="Lịch sử gửi mail"
            >
              <template #default>
                <CDropdown
                    color="transparent p-0"
                    placement="bottom-end"
                >
                  <template #toggler-content>
                    <CIcon name="cil-settings"/>
                  </template>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>
              <template #footer>
                <CChartLineSimple
                    class="mt-3"
                    style="height:70px"
                    background-color="rgba(255,255,255,.2)"
                    :data-points="listCountHistory"
                    :options="{ elements: { line: { borderWidth: 2.5 }}}"
                    point-hover-background-color="warning"
                    label="Members"
                    labels="months"
                />
              </template>
            </CWidgetDropdown>
          </CCol>
          <CCol sm="6" lg="3">
            <CWidgetDropdown
                color="danger"
                header="9.823"
                text="Members online"
            >
              <template #default>
                <CDropdown
                    color="transparent p-0"
                    placement="bottom-end"
                >
                  <template #toggler-content>
                    <CIcon name="cil-settings"/>
                  </template>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>
              <template #footer>
                <CChartBarSimple
                    class="mt-3 mx-3"
                    style="height:70px"
                    background-color="rgb(250, 152, 152)"
                    label="Members"
                    labels="months"
                />
              </template>
            </CWidgetDropdown>
          </CCol>
    </CRow>
    <CRow>
      <CCol col="12" sm="6">
        <CCallout color="info">
          <small class="text-muted">Số ứng viên</small><br />
          <strong class="h4">{{ dataCandidate.length }}</strong>
          <p></p>
          <CLink class="text-white bg-success px-2" href="/candidate/"
          >→ Đi đến danh sách ứng viên</CLink
          >
        </CCallout>
      </CCol>
      <CCol col="12" sm="6">
        <CCallout color="danger">
          <small class="text-muted">Số mail đã gửi</small><br />
          <strong class="h4">{{ dataHistory.length }}</strong>
          <p></p>
          <CLink class="text-white bg-warning px-2" href="/history/"
          >→ Đi đến lịch sử gửi mail</CLink
          >
        </CCallout>
      </CCol>
      <CCol col="12" sm="6">
        <CCallout color="success">
          <strong class="h4"
          >{{ dataCandidateThank.length }} ứng viên đang chờ được gửi
            mail</strong
          >
          <p></p>
          <CLink class="text-white bg-info px-2" href="/sendmail/mailthank/"
          >→ Đi đến gửi mail nhận việc</CLink
          >
          <p></p>
          <CLink class="text-white bg-secondary px-2" href="/sendmail/MailInter/"
          >→ Đi đến gửi mail cảm ơn</CLink
          >
          <p></p>
          <CLink class="text-white bg-dark px-2" href="/sendmail/MailOffer/"
          >→ Đi đến gửi mail phỏng vấn</CLink
          >
        </CCallout>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import {CChartLineSimple, CChartBarSimple} from '../charts/index'
import { mapMutations } from 'vuex';

import axios from "axios";
export default {
  // name: "AdvancedTables",
  name: "WidgetsDropdown",
  components: { CChartLineSimple, CChartBarSimple },
  data() {
    return {
      dataCandidate: [],
      dataHistory: [],
      dataCandidateThank: [],

      listCountCandidate: [],
      listCountHistory: [],
      listCountCandidateThank: [],
    };
  },
  mounted() {
    this.listData();
    console.log('asd');
    console.log(this.listCountCandidateThank)
  },
  methods: {
    listData: function() {
      const url = "http://127.0.0.1:8000/api/candidate";
      axios.get(url).then((response) => {
        this.dataCandidate = response.data;
        this.listCountCandidate = this.getListCountByMonth(this.dataCandidate);
      });
      axios.get("http://127.0.0.1:8000/api/history").then((response) => {
        this.dataHistory = response.data;
        this.listCountHistory = this.getListCountByMonth(this.dataHistory);
      });
      axios
        .get("http://127.0.0.1:8000/api/candidate?status=0")
        .then((response) => {
          this.dataCandidateThank = response.data;
          this.listCountCandidateThank = this.getListCountByMonth(this.dataCandidateThank);
        });

    },

    // Filter by Month
    countDataByMonth(month, listData) {
      let count = 0;
      for(let i=0; i<listData.length; i++){
        let time = new Date(listData[i].created_at).getTime()/1000;
        // console.log(time + " vs " + this.$store.state.unixTime.UNIX_MONTHS[0].first);
        if (time >= this.$store.state.unixTime.UNIX_MONTHS[month].first &&
            time <= this.$store.state.unixTime.UNIX_MONTHS[month].last)
          count++;
      }
      return count;
    },

    getListCountByMonth(listData) {
      let dataCount = [];
      for ( let i=0; i<7; i++ ){
        dataCount[i] = this.countDataByMonth(i, listData);
        this.countDataByMonth(i, listData)
      }
      console.log(dataCount);
      return dataCount;
    }
  },
};
</script>
