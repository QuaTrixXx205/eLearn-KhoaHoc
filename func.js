// Open and close sidebar 
var isClosed = false;
function toggleSidebar() {
    $(".sideBar").toggleClass("closed");
    isClosed = !isClosed;
}

// Hide sidebar when screen width is below 999px
$(window).resize(function () {
  var windowWidth = window.innerWidth;
  if(windowWidth < 999)
  {
    // console.log("Sidebar close on default");
    $(".sideBar").addClass("closed");
    isClosed = true;
  }
});

//Open account drop down
function openAccountDropDown() {
  document.getElementById("accountDropDown").classList.toggle("show");
}

document.addEventListener('click', function(event) {
  var accountDropDown = document.getElementById("accountDropDown");
  var accountButton = document.querySelector('.accountDropDownContainer .account-BTN');

  if (!accountButton.contains(event.target) && !accountDropDown.contains(event.target)) {
    accountDropDown.classList.remove('show');
  }
});


// Main and nested dropdown
$('.dropdown-btn, .nested-dropdown-btn').click(function (event) {
  event.stopPropagation();

  var dropdownContent = $(this).next('.dropdown-container, .nested-dropdown-container');
  var isVisible = dropdownContent.slideToggle().is(':visible');

  // Close all dropdowns and slide the clicked dropdown
  $('.dropdown-btn, .nested-dropdown-btn').not(this).removeClass('visible');
  $('.dropdown-container, .nested-dropdown-container').not(dropdownContent).slideUp();
});

// Open specific nested dropdowns with ID
$('#lapTrinhDropDown, #englishDropDown').click(function (event) {
  event.stopPropagation();

  // Show only the clicked nested dropdown
  var nestedDropdownContent = $(this).children('ul');
  var isVisible = nestedDropdownContent.slideToggle().is(':visible');

  // Close other nested dropdowns and slide the clicked nested dropdown
  $('.nested-dropdown-btn').not(this).removeClass('visible');
  $('.nested-dropdown-container ul').not(nestedDropdownContent).slideUp();
});

// Search module
$(document).ready(function () {
  $("input[name='search']").on("input", function () {
      // Get the input value
      var keyword = $(this).val().toLowerCase();

      // Filter the item-course elements based on the keyword
      $(".item-course").each(function () {
          var courseTitle = $(this).find(".title-image h4").text().toLowerCase();

          // Show or hide the element based on the matching keyword
          if (courseTitle.includes(keyword)) {
              $(this).show();
          } else {
              $(this).hide();
          }
      });
  });
});