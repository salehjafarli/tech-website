<template>
    <div class="modal">
        <div class="modal-background"></div>
            <div class="modal-content">
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                    <slot name="modalContents"></slot>
                    </div>
                  </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>
<style>
</style>