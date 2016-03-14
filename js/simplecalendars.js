$(document).ready(function(){

  var date = new Date(), 
year = date.getFullYear();
var yearLast = year;
var yearLength =year - 2015 ;
for(var i = 0; i<=yearLength; i++){
  $('.calendar-years ul').append('<li value="'+yearLast+'">'+yearLast+'</li>')
  yearLast = yearLast-1;
} 
})

var calendar = {

  init: function() {

    var mon = 'Пд';
    var tue = 'Вт';
    var wed = 'Ср';
    var thur = 'Чт';
    var fri = 'Пт';
    var sat = 'Сб';
    var sund = 'Нд';


        /**
     * Get current date
     */
    var d = new Date();
    var strDate = yearNumber + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    var yearNumber = (new Date).getFullYear();
    /**
     * Get current month and set as '.current-month' in title
     */
    var monthNumber = d.getMonth() + 1;

    function GetMonthName(monthNumber) {
            var months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'листопад', 'Грудень'];
      return months[monthNumber - 1];
    }

    setMonth(monthNumber, mon, tue, wed, thur, fri, sat, sund);

    function setMonth(monthNumber, mon, tue, wed, thur, fri, sat, sund) {
      $('.month').text(GetMonthName(monthNumber) + ' ' + yearNumber);
      $('.month').attr('data-month', monthNumber);
      printDateNumber(monthNumber, mon, tue, wed, thur, fri, sat, sund);
    }

      var date = new Date(); 
      var Cmonth =  date.getUTCMonth();

    var bb = Cmonth;
    $('.btn-next').on('click', function(e) {
      var monthNumber = $('.month').attr('data-month');
      if (monthNumber > 11) {
        $('.month').attr('data-month', '0');
        var monthNumber = $('.month').attr('data-month');
        yearNumber = yearNumber + 1;
        setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
      } else {
        setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
      };
       $('.next-month').remove(); 
       var DayForWeak = $('.calentdar-days tr:first td').length;
       var dFWeak = 7 - DayForWeak;

       $('.calentdar-days td').each(function(){
        var calDayTd = $(this);
        var lCalDay = +calDayTd.html() + dFWeak;
        calDayTd.html(lCalDay);
        calDayTd.attr('date-day', lCalDay);
      });
       for(var i = 1; i<=dFWeak; i++){
        $('.calentdar-days tr:first').prepend('<td date-month="1" date-day="1" date-year="1">1</td>');
       }
       $('.calentdar-days td:last').remove();
       bb++;






      function getWeekDay(date) {
        var daySunday = [sund, mon, tue, wed, thur, fri, sat];
        return daySunday[date.getDay()];
      }
      var date = new Date(); 
      var CYear = date.getFullYear();
      var Cmonth =  date.getUTCMonth();
      var firstDate = new Date(CYear, bb, 1 )
      var fDate = getWeekDay(firstDate);
      var minusDay = 0;
      if(fDate == sund){minusDay = 6;}
      else if(fDate == mon){ minusDay = 0;}
      else if(fDate == tue){ minusDay = 1;}
      else if(fDate == wed){ minusDay = 2;}
      else if(fDate == thur){minusDay = 3;}
      else if(fDate == fri){ minusDay = 4;}
      else if(fDate == sat){ minusDay = 5;}
      $('.calentdar-days td').each(function(){
        var calDayTd = $(this);
        var lCalDay = calDayTd.html() -  minusDay;
        calDayTd.html(lCalDay);
        calDayTd.attr('date-day', lCalDay);
      });
      var b = 0;
      var lastMonthDay =  $('.calentdar-days td:last').html();
      for(var i = 1; i<= minusDay; i++){
        b++;
        var lMDay = +lastMonthDay+b;
        $('.calentdar-days tr:last').append('<td date-month="' + monthNumber + '" date-day="' + lastMonthDay + '" date-year="' + CYear + '">' + lMDay + '</td>');
      }
        var colDay = $('.calentdar-days tr:last td').length;
        var remainsDay = 7 - colDay;
      var d = 0;
      for(var i = 1; i<= remainsDay; i++){
        d++;
        if(monthNumber != 12){
          var nextMonthNumber = monthNumber +1;
          nextCYear = CYear;
        }
        else{
          var nextMonthNumber = 1;
          var nextCYear = CYear + 1;
        }
        $('.calentdar-days tr:last').append('<td class="next-month" date-month="' + nextMonthNumber + '" date-day="' +  d + '" date-year="' + nextCYear + '">' + d + '</td>');
      }
      var lestMonth = new Date(CYear,bb,0).getDate();
      console.log(lestMonth)
      $('.calentdar-days td').each(function(){
        if($(this).html() <= 0 ){
          for(var i =1; i <= minusDay; i++){

          $(this).html(lestMonth )
                 .attr('date-day',lestMonth)
                 .addClass('next-month');
                 lestMonth--;
          }
        }
      $('.calentdar-days tr td.next-month').css('color','#cecece'); 
      })



       
      
    });

    $('.btn-prev').on('click', function(e) {
      var monthNumber = $('.month').attr('data-month');
      if (monthNumber < 2) {
        $('.month').attr('data-month', '13');
        var monthNumber = $('.month').attr('data-month');
        yearNumber = yearNumber - 1;
        setMonth(parseInt(monthNumber) - 1, mon, tue, wed, thur, fri, sat, sund);
      } else {
        setMonth(parseInt(monthNumber) - 1, mon, tue, wed, thur, fri, sat, sund);
      };
       $('.next-month').remove(); 
       var DayForWeak = $('.calentdar-days tr:first td').length;
       var dFWeak = 7 - DayForWeak;

       $('.calentdar-days td').each(function(){
        var calDayTd = $(this);
        var lCalDay = +calDayTd.html() + dFWeak;
        calDayTd.html(lCalDay);
        calDayTd.attr('date-day', lCalDay);
      });
       for(var i = 1; i<=dFWeak; i++){
        $('.calentdar-days tr:first').prepend('<td date-month="1" date-day="1" date-year="1">1</td>');
       }
       $('.calentdar-days td:last').remove();
        bb--;
    
      function getWeekDay(date) {
        var daySunday = [sund, mon, tue, wed, thur, fri, sat];
        return daySunday[date.getDay()];
      }
      var date = new Date(); 
      var CYear = date.getFullYear();
      var Cmonth =  date.getUTCMonth();
      var firstDate = new Date(CYear, bb, 1 )
      var fDate = getWeekDay(firstDate);
      var minusDay = 0;
      if(fDate == sund){minusDay = 6;}
      else if(fDate == mon){ minusDay = 0;}
      else if(fDate == tue){ minusDay = 1;}
      else if(fDate == wed){ minusDay = 2;}
      else if(fDate == thur){minusDay = 3;}
      else if(fDate == fri){ minusDay = 4;}
      else if(fDate == sat){ minusDay = 5;}
      $('.calentdar-days td').each(function(){
        var calDayTd = $(this);
        var lCalDay = calDayTd.html() -  minusDay;
        calDayTd.html(lCalDay);
        calDayTd.attr('date-day', lCalDay);
      });
      var b = 0;
      var lastMonthDay =  $('.calentdar-days td:last').html();
      for(var i = 1; i<= minusDay; i++){
        b++;
        var lMDay = +lastMonthDay+b;
        $('.calentdar-days tr:last').append('<td date-month="' + monthNumber + '" date-day="' + lastMonthDay + '" date-year="' + CYear + '">' + lMDay + '</td>');
      }
        var colDay = $('.calentdar-days tr:last td').length;
        var remainsDay = 7 - colDay;
      var d = 0;
      for(var i = 1; i<= remainsDay; i++){
        d++;
        if(monthNumber != 12){
          var nextMonthNumber = monthNumber +1;
          nextCYear = CYear;
        }
        else{
          var nextMonthNumber = 1;
          var nextCYear = CYear + 1;
        }
        $('.calentdar-days tr:last').append('<td class="next-month" date-month="' + nextMonthNumber + '" date-day="' +  d + '" date-year="' + nextCYear + '">' + d + '</td>');
      }
      var lestMonth = new Date(CYear,bb,0).getDate();
      console.log(lestMonth)
      $('.calentdar-days td').each(function(){
        if($(this).html() <= 0 ){
          for(var i =1; i <= minusDay; i++){

          $(this).html(lestMonth )
                 .attr('date-day',lestMonth)
                 .addClass('next-month');
                 lestMonth--;
          }
        }
      $('.calentdar-days tr td.next-month').css('color','#cecece'); 
      })

    });

    $('.calendar-month ul li').on("click",function(){
    var year = $('.calendar-years select').val()
    var numbMonth = $(this).val()-1;
    var nameMonth = $(this).text()-1;
    $('.calendar .calentdar-days td').attr('date-month',numbMonth);
    $('.calendar .month').attr('data-month',numbMonth);
    $('.calendar .month').text(nameMonth+' '+year);
       var monthNumber = $('.month').attr('data-month');
    
        setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);

  })
   $('.calendar-years ul li').on("click",function(){
    var nameYear = $(this).text();


    $('.calendar .calentdar-days td').attr('date-year',nameYear);
    yearNumber = nameYear
    yearNumber =yearNumber-1;
    yearNumber =yearNumber+1;
     var monthNumber = $('.month').attr('data-month');
     
        var monthNumber = $('.month').attr('data-month');
      if (monthNumber < 2) {
        $('.month').attr('data-month', '13');
        var monthNumber = $('.month').attr('data-month');
        yearNumber = yearNumber - 1;
        setMonth(parseInt(monthNumber) - 1, mon, tue, wed, thur, fri, sat, sund);
      } else {
        setMonth(parseInt(monthNumber) - 1, mon, tue, wed, thur, fri, sat, sund);
      };var monthNumber = $('.month').attr('data-month');
      if (monthNumber > 11) {
        $('.month').attr('data-month', '0');
        var monthNumber = $('.month').attr('data-month');
        yearNumber = yearNumber + 1;
        setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
      } else {
        setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
      };

    //   var monthNumber = $('.month').attr('data-month');
    //  if (monthNumber > 11) {
    //     $('.month').attr('data-month', '0');
    //     var monthNumber = $('.month').attr('data-month');
    //     yearNumber = yearNumber + 1;

    //     setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
    //   } else {
    //     setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
    //   };
  })






    /**
     * Get all dates for current month
     */

    function printDateNumber(monthNumber, mon, tue, wed, thur, fri, sat, sund) {

      $($('tbody.event-calendar tr')).each(function(index) {
        $(this).empty();
      });

      $($('thead.event-days tr')).each(function(index) {
        $(this).empty();
      });

      function getDaysInMonth(month, year) {
        // Since no month has fewer than 28 days
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
          days.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
        return days;
      }

      i = 0;

      setDaysInOrder(mon, tue, wed, thur, fri, sat, sund);

      function setDaysInOrder(mon, tue, wed, thur, fri, sat, sund) {
        var monthDay = getDaysInMonth(monthNumber - 1, yearNumber)[0].toString().substring(0, 3);
        if (monthDay === 'Mon') {
      console.log(yearNumber);
          $('thead.event-days tr').append('<td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td>');
        } else if (monthDay === 'Tue') {
      console.log(yearNumber);
          $('thead.event-days tr').append('<td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td>');
        } else if (monthDay === 'Wed') {
      console.log(yearNumber);
          $('thead.event-days tr').append('<td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td>');
        } else if (monthDay === 'Thu') {
      console.log(yearNumber);
          $('thead.event-days tr').append('<td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td>');
        } else if (monthDay === 'Fri') {
      console.log(yearNumber);
          $('thead.event-days tr').append('<td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td>');
        } else if (monthDay === 'Sat') {
      console.log(yearNumber);
          $('thead.event-days tr').append('<td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td>');
        } else if (monthDay === 'Sun') {
      console.log(yearNumber);
          $('thead.event-days tr').append('<td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td>');
        }
      };
      $(getDaysInMonth(monthNumber - 1, yearNumber)).each(function(index) {
        var index = index + 1;
        if (index < 8) {
          $('tbody.event-calendar tr.1').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '">' + index + '</td>');
        } else if (index < 15) {
          $('tbody.event-calendar tr.2').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '">' + index + '</td>');
        } else if (index < 22) {
          $('tbody.event-calendar tr.3').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '">' + index + '</td>');
        } else if (index < 29) {
          $('tbody.event-calendar tr.4').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '">' + index + '</td>');
        } else if (index < 32) {
          $('tbody.event-calendar tr.5').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '">' + index + '</td>');
        }
        i++;
      });


      function getWeekDay(date) {
        var daySunday = [sund, mon, tue, wed, thur, fri, sat];
        return daySunday[date.getDay()];
      }
      var date = new Date(); 
      var CYear = date.getFullYear();
      var Cmonth =  date.getUTCMonth();
      var firstDate = new Date(CYear, Cmonth, 1 )
      var fDate = getWeekDay(firstDate);
      var minusDay = 0;
      if(fDate == sund){minusDay = 6;}
      else if(fDate == mon){ minusDay = 0;}
      else if(fDate == tue){ minusDay = 1;}
      else if(fDate == wed){ minusDay = 2;}
      else if(fDate == thur){minusDay = 3;}
      else if(fDate == fri){ minusDay = 4;}
      else if(fDate == sat){ minusDay = 5;}
      $('.calentdar-days td').each(function(){
        var calDayTd = $(this);
        var lCalDay = calDayTd.html() -  minusDay;
        calDayTd.html(lCalDay);
        calDayTd.attr('date-day', lCalDay);
      });
      var b = 0;
      var lastMonthDay =  $('.calentdar-days td:last').html();
      for(var i = 1; i<= minusDay; i++){
        b++;
        var lMDay = +lastMonthDay+b;
        $('.calentdar-days tr:last').append('<td date-month="' + monthNumber + '" date-day="' + lastMonthDay + '" date-year="' + CYear + '">' + lMDay + '</td>');
      }
        var colDay = $('.calentdar-days tr:last td').length;
        var remainsDay = 7 - colDay;
      var d = 0;
      for(var i = 1; i<= remainsDay; i++){
        d++;
        if(monthNumber != 12){
          var nextMonthNumber = monthNumber +1;
          nextCYear = CYear;
        }
        else{
          var nextMonthNumber = 1;
          var nextCYear = CYear + 1;
        }
        $('.calentdar-days tr:last').append('<td class="next-month" date-month="' + nextMonthNumber + '" date-day="' +  d + '" date-year="' + nextCYear + '">' + d + '</td>');
      }
      var lestMonth = new Date(CYear,Cmonth,0).getDate();
      console.log(lestMonth)
      $('.calentdar-days td').each(function(){
        if($(this).html() <= 0 ){
          for(var i =1; i <= minusDay; i++){

          $(this).html(lestMonth )
                 .attr('date-day',lestMonth)
                 .addClass('next-month');
                 lestMonth--;
          }
        }
      $('.calentdar-days tr td.next-month').css('color','#cecece'); 
      })




      var date = new Date();
      var month = date.getMonth() + 1;
      var thisyear = new Date().getFullYear();
      setCurrentDay(month, thisyear);
      setEvent();
      displayEvent();
    }

    /**
     * Get current day and set as '.current-day'
     */
    function setCurrentDay(month, year) {
      var viewMonth = $('.month').attr('data-month');
      var eventYear = $('.event-days').attr('date-year');
      if (parseInt(year) === yearNumber) {
        if (parseInt(month) === parseInt(viewMonth)) {
          $('tbody.event-calendar td[date-day="' + d.getDate() + '"]').addClass('current-day');
        }
      }
    };

    /**
     * Add class '.active' on calendar date
     */
    $('tbody td').on('click', function(e) {
      if ($(this).hasClass('event')) {
        $('tbody.event-calendar td').removeClass('active');
        $(this).addClass('active');
      } 
      else {
        $('tbody.event-calendar td').removeClass('active');
      };
    });

    /**
     * Add '.event' class to all days that has an event
     */
    function setEvent() {
      $('.day-event').each(function(i) {
        var eventMonth = $(this).attr('date-month');
        var eventDay = $(this).attr('date-day');
        var eventYear = $(this).attr('date-year');
        var eventClass = $(this).attr('event-class');
        if (eventClass === undefined) eventClass = 'event';
        else eventClass = 'event ' + eventClass;

        if (parseInt(eventYear) === yearNumber) {
          $('tbody.event-calendar tr td[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').addClass(eventClass);
        }
      });
    };

    /**
     * Get current day on click in calendar
     * and find day-event to display
     */
    function displayEvent() {
      $('tbody.event-calendar td').on('click', function(e) {
        
        $('.day-event').slideUp('fast');
        var monthEvent = $(this).attr('date-month');
        var yearEvent = $(this).attr('date-year');
        var dayEvent = $(this).text();
        if($('.day-event[date-month="' + monthEvent + '"][date-day="' + dayEvent + '"][date-year="'+yearEvent+'"]').css('display') == 'none')
          $('.day-event[date-month="' + monthEvent + '"][date-day="' + dayEvent + '"][date-year="'+yearEvent+'"]').slideDown('fast');
      });
    };

    /**
     * Close day-event
     */
    $('.close').on('click', function(e) {
      $(this).parent().slideUp('fast');
    });

    /**
     * Save & Remove to/from personal list
     */
    $('.save').click(function() {
      if (this.checked) {
        $(this).next().text('Remove from personal list');
        var eventHtml = $(this).closest('.day-event').html();
        var eventMonth = $(this).closest('.day-event').attr('date-month');
        var eventDay = $(this).closest('.day-event').attr('date-day');
        var eventNumber = $(this).closest('.day-event').attr('data-number');
        $('.person-list').append('<div class="day" date-month="' + eventMonth + '" date-day="' + eventDay + '" data-number="' + eventNumber + '" style="display:none;">' + eventHtml + '</div>');
        $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').slideDown('fast');
        $('.day').find('.close').remove();
        $('.day').find('.save').removeClass('save').addClass('remove');
        $('.day').find('.remove').next().addClass('hidden-print');
        remove();
        sortlist();
      } else {
        $(this).next().text('Save to personal list');
        var eventMonth = $(this).closest('.day-event').attr('date-month');
        var eventDay = $(this).closest('.day-event').attr('date-day');
        var eventNumber = $(this).closest('.day-event').attr('data-number');
        $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').slideUp('slow');
        setTimeout(function() {
          $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').remove();
        }, 1500);
      }
    });

    function remove() {
      $('.remove').click(function() {
        if (this.checked) {
          $(this).next().text('Remove from personal list');
          var eventMonth = $(this).closest('.day').attr('date-month');
          var eventDay = $(this).closest('.day').attr('date-day');
          var eventNumber = $(this).closest('.day').attr('data-number');
          $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').slideUp('slow');
          $('.day-event[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').find('.save').attr('checked', false);
          $('.day-event[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').find('span').text('Save to personal list');
          setTimeout(function() {
            $('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').remove();
          }, 1500);
        }
      });
    }

    /**
     * Sort personal list
     */
    function sortlist() {
      var personList = $('.person-list');

      personList.find('.day').sort(function(a, b) {
        return +a.getAttribute('date-day') - +b.getAttribute('date-day');
      }).appendTo(personList);
    }

    /**
     * Print button
     */
    $('.print-btn').click(function() {
      window.print();
    });

  },
  
};

$(document).ready(function() {
  calendar.init();
});