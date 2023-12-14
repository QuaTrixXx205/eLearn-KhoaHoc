var isClosed = false;

//Open sidebar
function toggleSidebar() {
  $(".sideBar").toggleClass("closed");
  isClosed = !isClosed;
}

//Close sidebar
function closeSidebar() {
  $(".sideBar").addClass("closed");
  isClosed = true;
}

// Main and nested dropdown
$('.dropdown-btn, .nested-dropdown-btn').click(function (event) {
  event.stopPropagation();

  var dropdownContent = $(this).next('.dropdown-container, .nested-dropdown-container');
  var isActive = $(this).toggleClass('active').hasClass('active');

  // Close all dropdowns and slide the clicked dropdown
  $('.dropdown-btn, .nested-dropdown-btn').not(this).removeClass('active');
  $('.dropdown-container, .nested-dropdown-container').not(dropdownContent).slideUp();
  dropdownContent.slideToggle(isActive);
});

// Open specific nested dropdowns with ID
$('#lapTrinhDropDown, #englishDropDown').click(function (event) {
  event.stopPropagation();

  // Show only the clicked nested dropdown
  var nestedDropdownContent = $(this).children('ul');
  var isActive = $(this).toggleClass('active').hasClass('active');

  // Close other nested dropdowns and slide the clicked nested dropdown
  $('.nested-dropdown-btn').not(this).removeClass('active');
  $('.nested-dropdown-container ul').not(nestedDropdownContent).slideUp();
  nestedDropdownContent.slideToggle(isActive);
});
