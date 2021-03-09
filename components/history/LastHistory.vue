<template>
  <div>
    <CCardBody>
      <CDataTable
          :items="dataHistory"
          :fields="fields"
          items-per-page-select
          :items-per-page="5"
          pagination
      >
        <template #candidate_id="{item}">
          <td>
            {{ item.name }}
          </td>
        </template>
        <template #email="{item}">
          <td>
            {{ item.candidate_email }}
          </td>
        </template>
        <template #category="{item}">
          <td>
            {{ getCategory(item.template_id) }}
          </td>
        </template>
        <template #position="{item}">
          <td>
            {{ getPosition(item.position) }}
          </td>
        </template>
        <template #status="{item}">
          <td>
            {{ getStatus(item.status) }}
          </td>
        </template>
        <template #created_at="{item}">
          <td>
            {{ calLastTime(item.created_at) }}
          </td>
        </template>
        <template #show="{item}">
          <td>
            <CButton
                color="primary"
                variant="outline"
                size="sm"
                @click="showModal(item)"
            >
              Preview
            </CButton>
          </td>
        </template>
      </CDataTable>
    </CCardBody>
    <CModal
        CModal
        title="Mail Content"
        color="success"
        :show.sync="warningModal"
    >
      <div class="content-mail">
        {{ content }}
      </div>
    </CModal>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import { LIST_POSITION } from "@/const/constdata";
import { LIST_STATUS } from "@/const/constdata";
import { LIST_CATEGORY } from "@/const/constdata";
const fields = [
  { key: "candidate_id", label: "Name" },
  { key: "email", label: "Email" },
  { key: "category", label: "Mail Category" },
  {
    key: "position",
    label: "Position",
  },
  {
    key: "status",
    label: "Status",
  },
  { key: "created_at", label: "Activity" },
  {
    key: "show",
    label: "",
  },
];

export default {
  props: ["dataHistory"],
  name: "AdvancedTables",
  data() {
    return {
      fields: fields,
      selected: [],
      LIST_CATEGORY,
      LIST_POSITION,
      content: "",
      warningModal: false,
      dataTemplate: [],
    };
  },

  methods: {
    getPosition(id) {
      const position = LIST_POSITION.find((element) => element.value == id);
      return position ? position.label : "";
    },

    getCategory(id) {
      const category = LIST_CATEGORY.find((element) => element.value == id);
      return category ? category.label : "";
    },

    getStatus(id) {
      const category = LIST_STATUS.find((element) => element.value === id);
      return category ? category.label : "";
    },

    showModal(item) {
      this.content = item.content.replaceAll("<br />", "\n", item.content);
      this.warningModal = true;
    },

    convertDate(created) {
      created = moment(String(created)).format("DD/MM/YYYY");
      return created;
    },

    calLastTime(time) {
      let lastTime = new Date(time).getTime();
      let currentTime = new Date(Date.now()).getTime();
      let diffTime = currentTime - lastTime;

      if(parseInt(diffTime/(365*24*3600*1000)) > 1) {
        return (parseInt(diffTime/(365*24*3600*1000))) + " years ago";
      }
      else if (parseInt(diffTime/(365*24*3600*1000)) > 0) {
        return "Last year";
      }
      else if(parseInt(diffTime/(30*24*3600*1000)) > 1) {
        return (parseInt(diffTime/(30*24*3600*1000))) + " months ago";
      }
      else if(parseInt(diffTime/(30*24*3600*1000)) > 0) {
        return "Last month";
      }
      else if(parseInt(diffTime/(24*3600*1000)) > 1) {
        return (parseInt(diffTime/(24*3600*1000))) + " days ago";
      }
      else if(parseInt(diffTime/(24*3600*1000)) > 0) {
        return "Last a day"
      }
      else if(parseInt(diffTime/(3600*1000)) > 1) {
        return (parseInt(diffTime.getUTCDate())) + " hours ago";
      }
      else if(parseInt(diffTime/(3600*1000)) > 0) {
        return "Last an hour"
      }
      else if(parseInt(diffTime/(60*1000)) > 1) {
        return (parseInt(diffTime/(60*1000))) + " minutes ago";
      }
      else if(parseInt(diffTime/(60*1000)) > 0) {
        return "Last a minute"
      }
      else if(parseInt(diffTime/(1000)) > 1) {
        return (parseInt(diffTime/(1000))) + " seconds ago";
      }
      else if(parseInt(diffTime/(1000)) > 0) {
        return "Last a second"
      }
    }
  },

};
</script>
