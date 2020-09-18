(function(global){

	document.addEventListener('DOMContentLoaded',main);

	function main(){
		var x = document.querySelector("#form1");
		var y = document.querySelector("#form2");
		var obj = {};
		function register(){
			x.style.left = "-1000px";
			y.style.left = "0px";

		}
		function login(){
			location.reload();
		}
		obj.register = register;
		obj.login = login;

		global.$obj = obj;
	}
})(window);