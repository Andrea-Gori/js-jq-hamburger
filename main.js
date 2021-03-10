
// var apriMenu =  $(".fa-bars")
// var chiudiMenu = $(".fa-times")
//
//
// var burger = $(".hamburger-menu")
//
// apriMenu.click(function () {
//   burger.show()
//  })
//
// chiudiMenu.click(function () {
//   burger.hide()
// })

var apriMenu =  $(".fa-bars")
var chiudiMenu = $(".fa-times")


var burger = $(".hamburger-menu")

apriMenu.click(function () {
  burger.addClass("active")
 })

chiudiMenu.click(function () {
  burger.removeClass("active")
})
