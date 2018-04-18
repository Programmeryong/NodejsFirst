// 加载模块
let express = require('express');
let path = require('path');
let hbs = require('hbs');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
let app =express();

let blog = require('./model/app');		// 相当于是加载数据库
// 设定port变量，为访问端口
app.set('port', process.env.PORT || 8888);
// 设定views变量，为视图存放的目录
app.set('views', path.join(__dirname, 'html'));

// 运行模板方法
app.engine('html', hbs.__express);

app.use(express.static(path.join(__dirname, '/html')));
app.set('view engine', 'html');
// 加载注册页面
app.get("/", function(req, res) {
	res.redirect('/register');
});
app.get('/register', function(req, res) {
   res.sendFile(app.get('views')+'/register.html');
});
//加载的模板
app.get('/denglu', function(req, res) {
	blog.getList(function(list){
   	res.render('denglu', {data: list});
   });
});
app.get('/update',function(req,res){
	res.render('update');
})
app.get('/baidu',function(req,res){
	res.render('baidu');
})
app.get('/update/:id', function(req, res) {
	let id =req.params.id;
	blog.getidList(id,function(list){
   	res.render('update', {data: list});
   });
});
// 提交表单
app.post('/register',function(req,res){
	let post = '';
		req.on('data', function(data){		// 绑定用户数据传输的事件
			post += data;
		});
		req.on('end', function(){
			post = querystring.parse(post);
			blog.getincrease(post,function(result){
				if(result){
					res.redirect('/denglu');
				}else{
					res.send('错误');
				}
			})
		})
});

// 搜索结果
app.post('/denglu',function(req,res){
	let post = '';
		req.on('data', function(data){		// 绑定用户数据传输的事件
			post += data;
		});
		req.on('end', function(){
			post = querystring.parse(post);
			blog.getnameList(post,function(result){
				if(result){
					res.render('baidu',{data:result});
				}else{
					res.send('错误');
				}
			})
		})
});

// 修改数据
app.post('/update',function(req,res){
	let post = '';
		req.on('data', function(data){		// 绑定用户数据传输的事件
			post += data;
		});
		req.on('end', function(){
			post = querystring.parse(post);
			
			blog.getmodify(post,function(result){
				if(result){
					res.redirect('/denglu');
				}else{
					res.send('错误');
				}
			})
		})
});

// 删除
app.get('/del/:id',function(req,res){
	let id= req.params.id;
	blog.getdelete(id,function(result){
		if(result){
			res.redirect('/denglu');
		}else{
			res.send('错误')
		}
	})
})

app.listen(app.get('port'), function(){
	console.log('	服务已经开启，端口为：'+app.get('port'));
});