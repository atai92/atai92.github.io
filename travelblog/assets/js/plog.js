var plog = [
  ["June 25th, 2015",
    ["./assets/img/IMG_20150625_185154.jpg","After a super long flight, we finally reached Kwunming and ate our first dinner in China!!"]],
  ["June 26th, 2015",
    ["./assets/img/june/IMG_20150626_092247.jpg","Went to Dinosaur Valley park. There were fake dinosaurs that gave it a Jurassic Park feel to it."],
    ["./assets/img/IMG_dinovalley.jpg","There were dinosaur fossils too!"],
    ["./assets/img/june/IMG_20150626_094458.jpg","TONS of dinosaur fossils!"],
    ["./assets/img/june/IMG_20150626_094523.jpg","This one looks like the first blade from Supernatural... Hehehe."],
    ["./assets/img/june/IMG_20150626_094547.jpg","This one looked badass."],
    ["./assets/img/june/IMG_20150626_094836.jpg","More dinos!"],
    ["./assets/img/june/IMG_20150626_094915.jpg","Another dino..."],
    ["./assets/img/june/IMG_20150626_140756.jpg","Wow they have the classic herbal tea drink in a gold can. Still tastes as good as I could remember from my childhood."],
    ["./assets/img/june/IMG_20150626_164842.jpg","Saw this on the road. Pagodas are really popular in China. They're restoring a lot of them all around."],
  ],
  ["June 27th, 2015",
    ["./assets/img/IMG_031241.jpg",""],
    ["./assets/img/IMG_031331.jpg",""],
    ["./assets/img/IMG_031351.jpg",""],
    ["./assets/img/IMG_031361.jpg",""],
    ["./assets/img/IMG_031391.jpg",""],
    ["./assets/img/IMG_031441.jpg",""],
    ["./assets/img/IMG_031491.jpg",""],
    ["./assets/img/june/IMG_20150627_091130.jpg",""],
    ["./assets/img/june/IMG_20150627_101712.jpg","Saw this cute thing at a beverage shop. Tried their coconut milk and sugar cane drink. It was super refreshing!"],
    ["./assets/img/june/IMG_20150627_141812.jpg",""]
  ],
  ["June 28th, 2015",
    ["./assets/img/june/IMG_20150628_105402.jpg","After a 5 hour bus ride, we finally arrived at Shangri-la!"],
    ["./assets/img/june/IMG_20150628_093926.jpg","The temple is being restored and is HUGE!!"],
    ["./assets/img/june/IMG_20150628_100759.jpg","Close-up of one of the temples."],
    ["./assets/img/june/IMG_20150628_101933.jpg",""],
    ["./assets/img/june/IMG_20150628_102017.jpg","Another close-up of a temple."],
    ["./assets/img/june/IMG_20150628_105802.jpg","Good-bye Shangri-la."],
    ["./assets/img/june/IMG_20150628_110056.jpg","Duck, duck, GOOSE! Hehe"],
    ["./assets/img/june/IMG_20150628_115515.jpg","Visited some ex-rich person's manor."],
    ["./assets/img/june/IMG_20150628_120126.jpg","Owner had a badass sword."],
    ["./assets/img/june/IMG_20150628_120408.jpg","Neat bow and arrows too. Very fury."],
    ["./assets/img/june/IMG_20150628_141759.jpg","Spin the wheel to change your fate!"]
  ],
  ["June 29th, 2015",
    ["./assets/img/june/IMG_20150629_104512.jpg","Visited some shop that specializes in silver. A framed picture of a bird made with silver."],
    ["./assets/img/june/IMG_20150629_110749.jpg","There was a picture of some fish and lotus flowers."],
    ["./assets/img/june/IMG_20150629_154109.jpg",""],
    ["./assets/img/june/IMG_20150629_154216.jpg","Saw this little cutey. Hehehe."],
    ["./assets/img/june/IMG_20150629_155721.jpg","Cloudy with a chance of sandstorms... Was dusty because there are people building things nearby."],
    ["./assets/img/june/IMG_20150629_170730.jpg","OMG! The Smirnoff Ice of China?"],
    ["./assets/img/june/IMG_20150629_170739.jpg","Hello Kitty is an alcoholic? -- Cocktail drinks with Hello Kitty on it..."]
  ],
  ["June 30th, 2015",
    ["./assets/img/june/IMG_20150701_174156.jpg","Hot pot for dinner today! Didn't have much meat and had a TON of mushrooms... Like 90% mushrooms, 5% meat, and 5% noodles. The soup did have a pretty good taste to it afterwards though."]
  ]
];

var date_pos = plog.length - 1;
var entry_pos = 1;

updatePlog();

id.click("pic", function(){
  picClick();
});

id.click("pic1", picClick);
id.click("pic2", picClick);
id.click("pic3", picClick);

id.click("prev-date",function(){
  date_pos--;
  entry_pos = 1;
  if (date_pos < 0) {
    date_pos = plog.length - 1;
  }
  updatePlog();
  preload_init();
});

id.click("next-date",function() {
  date_pos++;
  entry_pos = 1;
  if (date_pos >= plog.length) {
    date_pos = 0;
  }
  updatePlog();
  preload_init();
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

function picClick() {
  entry_pos++;
  var month_entry = plog[date_pos];
  var entry = month_entry[entry_pos];
  if (entry_pos >= month_entry.length) {
    entry_pos = 1;
    }
  updatePlog();
  preload('next');
}
