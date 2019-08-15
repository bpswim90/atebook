import React from "react";

function MonthNav() {
  return (
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <span class="icon">
          <i class="fas fa-chevron-left" />
        </span>
      </div>
      <div class="level-item has-text-centered">August</div>
      <div class="level-item has-text-centered">
        <span class="icon">
          <i class="fas fa-chevron-right" />
        </span>
      </div>
    </nav>
  );
}

export default MonthNav;
