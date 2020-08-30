const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
          'id':1,
          'image':'https://placeimg.com/64/64/1',
          'name': '太郎',
          'birthday':'920913',
          'gender': '男',
          'job':'社員'
        },
        {
          'id':2,
          'image':'https://placeimg.com/64/64/2',
          'name': 'キム',
          'birthday':'910913',
          'gender': '男',
          'job':'学生'
        },
        {
          'id':3,
          'image':'https://placeimg.com/64/64/3',
          'name': '山下',
          'birthday':'900315',
          'gender': '女',
          'job':'栄養士'
        }
      ]);
});
app.listen(port,() => console.log(`Listening on port ${port}`));