var plog = [
  ["June 25th, 2015",
    ["assets/img/IMG_20150625_185154.jpg","After a super long flight, we finally reached Kwunming and ate our first dinner in China!!"]],
  ["June 26th, 2015",
    ["assets/img/DSC03100.JPG","Went to Dinosaur Valley and saw dinosaur fossils."]],
  ["June 27th, 2015",
    ["assets/img/DSC03124.JPG",""],
    ["assets/img/DSC03133.JPG",""],
    ["assets/img/DSC03135.JPG",""],
    ["assets/img/DSC03136.JPG",""],
    ["assets/img/DSC03139.JPG",""],
    ["assets/img/DSC03144.JPG",""],
    ["assets/img/DSC03149.JPG",""],
    ]
];

var date_pos = plog.length - 1;
var entry_pos = 1;

updatePlog();

id.click("pic", function(){
  entry_pos++;
  var month_entry = plog[date_pos];
  var entry = month_entry[entry_pos];
  if (entry_pos >= month_entry.length) {
    entry_pos = 1;
    }
  updatePlog();
});

id.click("prev-date",function(){
  date_pos--;
  entry_pos = 1;
  if (date_pos < 0) {
    date_pos = plog.length - 1;
  }
  updatePlog();
});

id.click("next-date",function() {
  date_pos++;
  entry_pos = 1;
  if (date_pos >= plog.length) {
    date_pos = 0;
  }
  updatePlog();
});

function updatePlog() {
  var month_entry = plog[date_pos];
  var entry = month_entry[entry_pos];
  var img_src = entry[0];
  var img_desc = entry[1];
  id.get("date").innerHTML = month_entry[0] + "&ensp;&nbsp;&emsp;&emsp;&emsp; Picture " + entry_pos + " of " + (month_entry.length - 1);
  id.get("pic").src = img_src;
  id.get("pic-desc").innerHTML = img_desc;
}
