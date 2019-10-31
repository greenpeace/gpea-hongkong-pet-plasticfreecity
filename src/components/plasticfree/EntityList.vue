<template>
  <section
    id="school-list"
    class="page-section entityList mt-5"
  >
    <div class="container">
      <header class="mb-2">
        <h2 class="display-1 mb-2 text-light-blue font-weight-bold">走塑校園</h2>
        <p>一些學校正在校園內推廣走塑文化，培養學生的走塑習慣。現時，以下的學校已實施不同程度的走塑措施！</p>
      </header>
      <menu>
        <ul class="nav__filter">
          <li
            v-for='program in programList'
            :key="program"
            v-on:click="selectFilter(program)"
            class="filter__item"
          >
            <small>{{program}} </small>
          </li>
        </ul>
      </menu>
      <transition-group
        tag="ul"
        class="school__list content__list"
        name="company"
      >
        <li
          v-for="school in filteredList"
          :key="school"
          class="school__item company"
        >
          <small class="text-white"> {{school}} </small>
        </li>
      </transition-group>
      <div class="mt-5 text-center">
        <p>你願意成為走塑校園一份子嗎？如果學校有興趣了解更多走塑資訊，或想推行走塑相關的措施，歡迎<a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4HuHDCKu8BjMTBdKpcvDn1thfdU38-o4Jwr7z4Dy1kSikiA/viewform"
            target="_blank"
          ><u>與我們聯絡</u></a>。
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd4HuHDCKu8BjMTBdKpcvDn1thfdU38-o4Jwr7z4Dy1kSikiA/viewform"
          target="_blank"
        >
          <button class="join-btn btn my-4">加入成為走塑校園</button>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import { schoolList, programList } from "@/helpers.js";
export default {
  data() {
    return {
      filters: {
        schoolFilter: null,
        checkedSchoolFilter: "所有有份參與走塑校園"
      },
      schoolList: schoolList,
      programList: programList
    };
  },
  methods: {
    selectFilter(filter) {
      this.filters.checkedSchoolFilter = filter;
    }
  },
  computed: {
    filteredList() {
      const filter = this.filters.checkedSchoolFilter;
      const list = this.schoolList;
      const filteredList = [];
      if (filter == "所有有份參與走塑校園") {
        list.map(school => {
          filteredList.push(school.name);
        });
      } else {
        list.map(school => {
          if (school.programs.some(program => program == filter)) {
            filteredList.push(school.name);
          } else {
            return false;
          }
        });
      }
      return filteredList.sort((a, b) => a - b);
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.nav__filter {
  list-style: none;
  padding: 0 1rem 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid $wod-gray-3;
}

.filter__item {
  border: 1px solid #c5d0d1;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 275ms;
}

.school__list {
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  backface-visibility: hidden;
  z-index: 1;
}

.school__item {
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.25rem 1rem;
  background-color: $wod-light-blue;
  border-radius: 6px;
  line-height: 1.2;
  transition: all 275ms;
}

.join-btn {
  background-color: $wod-light-blue;
  color: #fff;
  font-size: 1.2rem;
}
</style>