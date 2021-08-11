<template>
    <v-footer
      app
      absolute
      height="271"
    >
      <v-container>
        <div class="footer">
          <div class="footer-sponsor">
            <p class="subtitle">The project is suported by:</p>
            <ul>
              <li class="mb-1">
                <v-img
                  alt="Royal Society"
                  width="150"
                  :src="require('@/assets/sponsors/royal-society_1.png')"
                />
              </li>
              <li>
                <v-img
                  alt="RFBR"
                  width="150"
                  :src="require('@/assets/sponsors/rfbr.png')"
                />
              </li>
            </ul>
            <ul class="mb-1">
              <li class="mb-1 pl-3">
                <p class="project"> Project IEC\R2\202175 </p>
              </li>
              <li class="mb-1 pl-2">
                <p class="project"> Project No.21-52-10012 </p>
              </li>
            </ul>
          </div>
          <div class="footer-bottom">
            <ul>
              <li>
                <v-img
                  alt="UCL"
                  :src="require('@/assets/emblems/ucl-white.png')"
                  width="120"
                />
              </li>
              <li>
                @{{ new Date().getFullYear() }}<strong> UCL</strong>
              </li>
            </ul>
          </div>
        </div>
      </v-container>
    </v-footer>
</template>

<script src="./footer.js"></script>
<style lang="scss" scoped src="./footer.scss"></style>
