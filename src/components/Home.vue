<template>
   <div>
    <section class="hero is-info is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-6 is-offset-3">
            <h1 class="title white">
                {{ title }}
            </h1>
            <h2 class="subtitle">
                {{ subtitle1 }}
              <br/>
                {{ subtitle2 }}
            </h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

export default {
    data: function() {
      return {
        'title': 'Tech website',
        'subtitle1': 'Bu sayt Vue freymvörkü vasitəsilə hazırlanmışdır',
        'subtitle2': 'subtitl 2',
      }
    }
}
</script>

<style scoped>
.hero.is-info {
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url('https://pyxis.nymag.com/v1/imgs/956/5db/38bc1d91ee2321c6868bd5300d3b7959a2-best-college-laptops.2x.rsocial.w600.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>