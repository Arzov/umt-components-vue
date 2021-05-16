<template>
  <div class="umt-component umt-patch-cell">
    <a-row type="flex" align="middle" class="row">
      <a-col :span="3" class="team-wrapper">
        <img
          class="team-image"
          :src="match.teams[0].image"
          @error="onErrorLoadTeamImage"
        />
        <span>{{ match.teams[0].name }}</span>
      </a-col>

      <a-col class="separator">
        <span>-</span>
      </a-col>

      <a-col :span="3" class="team-wrapper">
        <img
          class="team-image"
          :src="match.teams[1].image"
          @error="onErrorLoadTeamImage"
        />
        <span>{{ match.teams[1].name }}</span>
      </a-col>

      <a-col class="info">
        <a-row type="flex" justify="center" class="row">
          <a-col class="patches">
            <div class="count">
              <span><i>{{ match.patches[0] }}/{{ match.patches[1] }}</i></span>
            </div>
            <div class="label-wrapper">
              <span class="label">Parches</span>
            </div>
          </a-col>
          <a-col class="date">
            <div class="when">
              <span><i>{{ match.date }}</i></span>
            </div>
            <div class="label-wrapper">
              <span class="label">Fecha</span>
            </div>
          </a-col>
        </a-row>
      </a-col>

      <a-col>
        <umt-button type="rounded" size="small" @click="onSubmit">UNIRSE</umt-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import UmtThemeMixin from "./../mixins/theme";
import UmtCellMixin from "./../mixins/cells";

export default {
  name: "UmtPatchCell",
  mixins: [UmtThemeMixin, UmtCellMixin],
  props: {
    match: {
      type: Object,
      required: true,
    },
  },
};
</script>