const{src:src,dest:dest}=require("gulp"),minify=require("gulp-minify"),imagemin=require("gulp-imagemin");let cleanCSS=require("gulp-clean-css");function minifys(){return src("./*.js").pipe(minify()).pipe(dest("output/"))}function minifyCSS(){return src("./*.css").pipe(cleanCSS({debug:!0},i=>{console.log(`${i.name}: ${i.stats.originalSize}`),console.log(`${i.name}: ${i.stats.minifiedSize}`)})).pipe(dest("output/"))}exports.minifys=minifys,exports.minifyCSS=minifyCSS;const htmlmin=require("gulp-htmlmin");function minifyHTML(){return src("./*.html").pipe(htmlmin({collapseWhitespace:!0})).pipe(dest("output/"))}exports.minifyHTML=minifyHTML;