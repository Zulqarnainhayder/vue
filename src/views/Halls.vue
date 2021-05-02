<template>
  <div>
    <div id="top-section">
      <div class="container">
        <div class="row top-section-container-padding">
          <div class="col-md-5">
            <h1 class="top-section-main-heading">
              Never Worry About Your Site Again
            </h1>
            <p class="top-section-text pt-5">
              Let us handle the backend – we’ll manage and monitor your website
              so it’s safe, secure, and always up-and-running.
            </p>
            <div class="pt-2">
              <a class="btn btn-primary mr-3" href="#" role="button"
                >Gets Started Now</a
              >
              <a class="btn btn-primary" href="#" role="button">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>
