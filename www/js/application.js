var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

this.Slider = (function() {
  function Slider(container) {
    this.prev = __bind(this.prev, this);
    this.next = __bind(this.next, this);
    this.container = $(container);
    this.countContainer = $('.controls .count');
    this.totalSlides = this.container.find('.listing').length;
    this.button_next = $('.controls a#next');
    this.button_prev = $('.controls a#prev');
    this.container.find('> li.listing:first-child').addClass('active');
    this.button_next.on('click', this.next);
    this.button_prev.on('click', this.prev);
  }

  Slider.prototype.next = function(e) {
    var current;
    e.preventDefault();
    current = this.container.find('li.active');
    if (current.next().length > 0) {
      current.next().addClass('active');
      this.countContainer.text(parseInt(this.countContainer.text()) + 1);
    } else {
      this.container.find('> li.listing:first-child').addClass('active');
      this.countContainer.text('1');
    }
    return current.removeClass('active');
  };

  Slider.prototype.prev = function(e) {
    var current;
    e.preventDefault();
    current = this.container.find('li.active');
    if (current.prev().length > 0) {
      current.prev().addClass('active');
      this.countContainer.text(parseInt(this.countContainer.text()) - 1);
    } else {
      this.container.find('> li.listing:last-child').addClass('active');
      this.countContainer.text(this.totalSlides);
    }
    return current.removeClass('active');
  };

  return Slider;

})();
