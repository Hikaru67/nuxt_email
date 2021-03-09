<template>
  <div>
    <CCard>
      <CCardHeader  class ="center">
        Candidate Management
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="6">
            <CInput
              label="First name"
              placeholder="Enter your first name"
              v-model="form.firstName"
              horizontal
            />
          </CCol>
          <CCol sm="6">
            <CInput
                label="Last name"
                placeholder="Enter your last name"
                v-model="form.lastName"
                horizontal
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="6">
            <CInput label="Phone" placeholder="Phone" horizontal v-model="form.phone">
            </CInput>
          </CCol>
          <CCol sm="6">
            <CInput
                label="Email"
                placeholder="Email"
                type="email"
                horizontal
                v-model="form.email"
            >
            </CInput>
          </CCol>
        </CRow>
        <CRow>

        </CRow>

        <CRow>
          <CCol sm="6">
            <CSelect
              label="Position"
              :options="LIST_POSITION"
              horizontal
              :value.sync="form.position"
            />
          </CCol>
          <CCol sm="6">
            <CSelect
                label="Origin"
                :options="LIST_ORIGINS"
                horizontal
                v-model="form.origin"
                :value.sync="form.origin"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="6">
            <CTextarea
                label="Link cv"
                placeholder="Link cv"
                type="text"
                horizontal
                v-model="form.linkCv"
            >
            </CTextarea>
          </CCol>
          <CCol sm="6">
            <CRow>
              <CCol sm="3">
                <label for="status">Status</label>
              </CCol>
              <CCol sm="9">
                <CInputRadioGroup
                    id="status"
                    name=""
                    :options="LIST_STATUS"
                    horizontal
                    :checked="form.status.toString()"
                    v-model="form.status"
                    :value.sync="form.status"
                    inline
                />
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <div v-if="errors && errors.length">
          <div v-for="error in errors" :key="error">
            <p class="alert alert-warning">{{ error }}</p>
          </div>
        </div>
        <CButton
          v-if="!this.$route.params.id"
          color="success"
          class="btn-click"
          @click="submitForm()"
        >
          Submit
        </CButton>
        <CButton v-else color="success" class="btn-click" @click="updateForm()">
          Update
        </CButton>
        <CButton color="primary" @click="$router.go(-1)">
          Go Back
        </CButton>
      </CCardFooter>
    </CCard>
  </div>
</template>
<script>
import { LIST_POSITION, LIST_STATUS, LIST_ORIGINS } from "@/const/constdata";

import axios from "axios";
export default {
  data() {
    return {
      LIST_POSITION,
      LIST_STATUS,
      LIST_ORIGINS,
      form: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        origin: "",
        linkCv: "",
        status: "",
        position: 0,
      },
      errors: [],
    };
  },
  mounted() {
    if (this.$route.params.id) this.getDetail();
  },
  methods: {
    submitForm() {
      if (!this.validateForm().length) {
        axios
          .post("http://127.0.0.1:8000/api/candidate/", this.form)
          .then(function(response) {})
          .then(() => {
            this.$router.push({ path: "/candidate/" });
          });
      }
    },

    updateForm() {
      if (!this.validateForm().length) {
        axios
          .put(
            "http://127.0.0.1:8000/api/candidate/" + this.$route.params.id,
            this.form
          )
          .then(function(response) {})
          .then(() => {
            this.$router.push({ path: "/candidate/" });
          });
      }
    },

    getDetail() {
      axios
        .get("http://127.0.0.1:8000/api/candidate/" + this.$route.params.id)
        .then((response) => {
          this.form = response.data;
        });
    },

    validateForm() {
      this.errors = [];
      Object.entries(this.form).forEach(([key, value]) => {
        if (value === "") {
          this.errors.push("Data " + key + " validate");
        }
      });
      return this.errors;
    },
  },
};
</script>
