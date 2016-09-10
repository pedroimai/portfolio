var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
   name: String,
   filter:String
});

var SkillSchema = new mongoose.Schema({
   name: String,
   percent: Number,
   Category: String
});

var ExperienceSchema = new mongoose.Schema({
   institution: String,
   location: String,
   position: String,
   date_init: Date,
   date_conclusion: Date,
   text: String
});

var PortfolioSchema = new mongoose.Schema({
   name: String,
   image: String,
   institution: String,
   date_creation: Date,
   description: String,
});

var EducationSchema = new mongoose.Schema({
   institution: String,
   course: String,
   text: String,
   date_init: Date,
   date_conclusion:  Date
});


var UserSchema = new mongoose.Schema({
   id: Number,
   profile:{  
      name: String,
      position: String,
      subtext: String,
      text: String
   },
   skills:{  
         subtext: String,
         categories:[CategorySchema],
         list:[SkillSchema]
      },
   portfolio:{  
         subtext: String,
         list:[PortfolioSchema]
      },      
   education:{  
      subtext: String,
      list:[EducationSchema],
      complementary:[String]
   },
   experience:{  
      subtext: String,
      list:[ExperienceSchema]
   },
   contact:{  
      address: String,
      phone: String,
      email: String
   }
});

module.exports = mongoose.model('User', UserSchema);