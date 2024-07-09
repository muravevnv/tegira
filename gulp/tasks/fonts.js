import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "FONTS",
      message: "Error: <%= error.message %>"
    })
  ))

  .pipe(fonter({
    formats: ['ttf']
  }))

  .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "FONTS",
      message: "Error: <%= error.message %>"
    })
  ))

  .pipe(fonter({
    formats: ['woff']
  }))

  .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
  .pipe(ttf2woff2())
  .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

// export const fontStyle = () => {
//   fs.readdir(app.path.build.fonts, function(err, fontsFiles) {
//     if(!fs.existsSync(fontsFile)) {
//       fs.writeFile(fontsFile, '', cb);
//       let newFileOnly;
//       for(var i = 0; i < fontsFiles.length; i++) {
//         let fontFileName = fontsFiles[i].split('.')[0];
//         if(newFileOnly !== fontFileName) {
//           let fontName = fontFileName.split('-')[0].split('.')[0];
//           let fontWeight = fontFileName.split('-')[1];
//           if(fontWeight.toLowerCase() === 'thin') {
//             fontWeight = 100
//           } else if(fontWeight.toLowerCase() === 'extralight') {
//             fontWeight = 200
//     }
//   })
// }