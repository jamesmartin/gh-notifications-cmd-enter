console.log("gh-cmd-enter-notification extension")

function markAsRead(notification) {
  if(notification.classList.contains("read")) {
    return
  }

  notification.classList.toggle("unread")
  notification.classList.toggle("read")
}

window.addEventListener("keydown", function(e) {
  if(e.keyCode == 13 && e.metaKey) {
    notification = document.querySelector(".notifications-list ul.notifications li.navigation-focus")
    link = notification.querySelector("a.js-notification-target")
    if(notification && link) {
      markAsRead(notification)
      open(link.href, "_blank")
    }
  }
}, false)
