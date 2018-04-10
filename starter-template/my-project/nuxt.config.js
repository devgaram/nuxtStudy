module.exports = {
  /*
  ** Headers of the page
  ** 애플리케이션의 모든 기본 메타를 정의할 수 있다.
  */
  head: {
    title: 'my-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  ** Nuxt.js를 사용하여 기본적으로 불러올 loading 컴포넌트를 사용자 정의할 수 있다.
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  ** 생성된 vendor.bundle.js 파일에 모듈을 추가하여 앱 번들의 크기를 줄일 수 있다.
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

/*
** 그 밖에 옵션들.
** cache - 캐시된 컴포넌트를 사용하여 렌더링 성능을 향상시킬 수 있다.
** css - 모든 페이지에 전역으로 사용할 css파일/모듈/라이브러리 파일을 설정할 수 있다.
** dev - 개발 또는 프로덕션 모드를 정의할 수 있다.
** generate - 애플리케이션에서 Nuxt.js가 HTML 파일로 변환할 모든 동적인 경로에 대한 각각의 PARAMS값을 정의할 수 있다.
** plugins - 루트 vue.js 애플리케이션을 인스턴스화 하기 전에 실행할 javascript 플러그인을 정의할 수 있다.
** transition - 페이지 transition 기능의 기본 속성을 정의할 수 있다.
** router - vue-router의 기본적인 nuxt.js 구성을 덮어 쓸 수 있다.
** rootDir - nuxt.js 애플리케이션의 위치를 정의할 수 있다.
*/