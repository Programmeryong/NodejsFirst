let mysql = require('mysql');
// let fun = require('fun');
//创建与数据库的链接
let connection = mysql.createConnection({
	//数据库的设置
	host:"localhost",		//服务器地址
	user:"root",			//用户名
	password:"root",		//密码
	port:"3306",			//服务器端口
	database:"register"			//数据库名
});
//进行链接
connection.connect(function(err){
	if(err){
		console.log(err);
		return ;
	}
	console.log('	数据库链接成功');
});
/*
	connection.query(sql , callback) 
	让数据库执行某个sql语句
	callback 有两个参数 
	error 如果该语句执行出错 就会把错误信息放在该参数中
	result sql执行成功的结果会放在该参数
*/		
// 获取数据库的方法   ---查 where p_state=1
exports.getList = function(fun){
  let sql = 'SELECT * FROM `table`  where p_state = 1';
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    fun(result);  // 使用回调函数把结果通过参数的方法传出去
  }); 
}


// id查找
exports.getidList = function(id,fun){
  let sql = 'SELECT * FROM `table`  where id='+id;
  connection.query(sql, function(err, result){
    if(err){
      console.log(err);
      return ;
    }
    fun(result[0]);  // 使用回调函数把结果通过参数的方法传出去
  }); 
}

// 名字查找
exports.getnameList  = function(text,fun){
	let sql = 'SELECT * FROM `table`  where p_name like "%'+text.btntext+'%" and p_state = 1';
	// console.log(sql);
	connection.query(sql,function(err,result){
		if(err){
			console.log(err);
			return;
		}
		fun(result);
	});
}


// 删除数据的方法 ---删   修改状态删除而不是delete
exports.getdelete =function(userid,fun){
	let sql = 'update `table` set p_state=? where id=?';
	let params = [-1,userid];
	connection.query(sql,params,function(err,result){
		if(err){
			console.log(err);
			return;
		}
		fun(result);
	});
}

// 添加数据   ---增
exports.getincrease = function(data,fun){
	let sql = 'INSERT INTO `table`(p_name, p_pow, p_pho, p_em) VALUES  (?, ?, ?, ?)';
	let userpost =[data.username,data.poassword,data.usertelphone,data.useremail];
    connection.query(sql, userpost, function(err, result){
	if(err){
		console.log(err);
		return ;
	}
    fun(result);
});
}

//修改数据 ---改

exports.getmodify = function(data,fun){
	let sql = 'update `table` set p_name="'+data.username+'", p_pow="'+data.userpassword+'", p_pho="'+data.userpho+'", p_em="'+data.useremail+'" where id="'+data.id+'"';
	connection.query(sql,function(err,result){
		if(err){
			console.log(err);
			return;
		}
		fun(result);
	});
}