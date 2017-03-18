<style scoped>
#calendar{

	width:40%;
	height:50%;
	float:left;
	position:fixed;
	top:0%;
	left:15%;
	background-color: #252839;

}
#lastMonth {

}
#nextMonth {


}
#timing {
  display: inline-block;
}
#wrapper2{
	position:fixed;
	top:0%;
	left:20%;
	border:10px solid red;
}
#wrapper{
	position:fixed;
	left:17%;
	top:5%;
	width:36%;
	height:45%;
	margin:auto;
	border:1px solid black;
			background-color: #e9ece5;



}
.calendar-days{
	width:100%;
	height:84%;
}
.daysin {
	border:1px solid #252839;
		width:13.86%;
		height:15.7%;
	line-height:35px;
	text-align:center;
	float:left;
	
}

.week {


	float:left;
		width:14.2%;
	height:100%;
	line-height:150%;
	text-align:center;


}
.calendar-body{
	height:82%;
	width:100%;

}
.calendar-weekday{
	width:100%;
	height:16%;
	background-color: white;

}
#lastMonth{
  display: inline-block;}
#nextMonth{
	  display: inline-block;
}
.calendar-header{
	height:18%;
	width:100%;
		background-color: white;
}

#goLast{
	transform:rotate(180deg);
}
.jumpAnother{
	height:30px;
	width:30px;
	position:relative;
	top:8px;
}
#wrapper3{
	position:relative;
	left:25%;
	background-color:
}

</style>

<template>

		<div id="calendar" v-bind:style="styleObject">
			<div id="wrapper">
				<div class="calendar-header">
					<div id="wrapper3">
					<img id="goLast" class="jumpAnother" src="../static/angle-right(1).png" v-on:click="goLastMonth">
					<p id="timing">{{thisYear}} - {{thisMonth}} - {{ presentTime }}</p>
					<img id="goNext" class="jumpAnother" src="../static/angle-right(1).png" v-on:click="goNextMonth">
					</div>
				</div>
				<div class="calendar-body">
					<div class="calendar-weekday">
						<span class="week" v-for="week in weeks">{{week}}</span>
					</div>
					<div class = "calendar-days">
						<span class="daysin" v-for="(item, index) in generateAll()" :id="[item]" v-on:click="commit($index, $event)">{{item}}</span>
					</div>
				</div>
			</div>
	</div>

</template>

<script>
	const WEEKS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat­'];
	export default{
		name:'calendar',
		data: function(){
			return {
				test: 23,
				time: new Date(),
				weeks: WEEKS,
				thisYear: new Date().getFullYear(),
				thisMonth: new Date().getMonth() + 1,
				thisDay: new Date().getDate(),
				newt:' ',

		}
		},
		computed:{
			   presentTime () {
            return this.$store.state.presentTime
				

    },

			firstDayInMonth(){
      			return new Date(this.thisYear, this.thisMonth - 1, 1).getDay();
    		},
			
			newTime(){
				return new Date(this.thisYear, this.thisMonth - 1, 4) 
			}


		},
		methods:{
			
			forTest: function(getAmountOfLast){
				return this.getAmountOfLast() + 1;
			},

			add: function(){
				this.$store.commit('CHANGEDATE',this.newTime)

			},
			commit: function($index, $event){
				this.newt = ($event.target.id ),
				this.$store.commit('CHANGEDATE',this.newTime)

			},
			judgeAmount: function(argument){
				switch(argument)
				{
					case 1:
					case 3:
					case 5:
					case 7:
					case 8:
					case 10:
					case 12:
						return 31;

					case 4:
					case 6:
					case 9:
					case 11:
						return 30;

					case 2:
						if (this.judgeRun(this.thisYear))
							return 29
						else 
							return 28
						
				}
			},

			judgeRun: function(argument){
				return ((argument % 100 !== 0 && argument % 4 === 0) || (argument % 400 === 0))
			},

			getAmountOfLast: function(){
				let lastMonth = this.thisMonth - 1;
				return this.judgeAmount(lastMonth);
			},

			getAmountOfThis: function(){
				return this.judgeAmount(this.thisMonth);
			},

			getAmountOfNext: function(){
				return this.judgeAmount(this.thisMonth + 1);
			},

			generateLastMonth: function(){
				let amountOfLast = this.getAmountOfLast();
				let firstDay = this.firstDayInMonth;
				let listLast = [];
				for (var i = amountOfLast; i > amountOfLast - firstDay ; i--) {
					listLast.push(i)
				};
				return listLast.reverse();
			},

			generateThisMonth: function(){
				let amountThis = this.getAmountOfThis();
				let listThis = [];
				for (var i = 1; i < amountThis+1; i++) {
					listThis.push(i)
				}
				return listThis;
			},

			generateNextMonth: function(){
				let amountNext = this.getAmountOfNext();
				let listNext = [];
				for (var i = 1; i < 42 - this.firstDayInMonth - this.getAmountOfThis() + 1; i++) {
					listNext.push(i) 	
				}
				return listNext;
			},

			generateAll: function(){
				let listLast = this.generateLastMonth();
				let listThis = this.generateThisMonth();
				let listNext = this.generateNextMonth();
				let listAll = listLast.concat(listThis,listNext);
				return listAll;
			},

			goNextMonth:function(event) {
				if (this.thisMonth < 12){
					this.thisMonth += 1;
				}else{
					this.thisYear += 1;
					this.thisMonth = 1;
				}
			},


			goLastMonth:function(event){
				if(this.thisMonth > 1){
					this.thisMonth -= 1;
				}else{
					this.thisYear -= 1;
					this.thisMonth = 12;
				}

			},
		},
	}
</script>
