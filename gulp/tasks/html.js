import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import pug from "gulp-pug";


export const html = () => {
  return app.gulp.src(app.path.src.html)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "HTML",
      message: "Error: <%= error.message %>"
    })
  ))
  // .pipe(fileinclude())
  .pipe(pug({
    pretty: true,
  }))
  .pipe(app.plugins.replace(/@img\//g, 'img/'))
  .pipe(webpHtmlNosvg())
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugins.browsersync.stream())
}