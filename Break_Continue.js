// Source-GFG
// const fruit="Mango";
// switch(fruit) 
// {
// 	case "Apple":
// 		console.log("Apple is healthy for our body");
// 		break;
// 	case "Mango":
// 		console.log("Mango is a nutricious food");
// 		break;
// 	default:
// 		console.log("I don't like fruits.");
// }
// Output: Mango is a nutricious food


// const fruit="Apple";
// switch (fruit) 
// {
// 	case "Apple":
// 		console.log("Apple is healthy for our body");
// 	case "Mango":
// 		console.log("Mango is a nutricious food");
// 		break;
// 	default:
// 		console.log("I don't like fruits.");
// }
// Output:
// Apple is healthy for our body
// Mango is a nutricious food


// for(let i=1;i<6;i++) 
// {
// 	if (i==4) 
//         break;
// 	console.log(i);
// }
// Output:
// 1
// 2
// 3


// Using break in a while and do-while loop
// let i=1;
// while(i<=5) 
// {
// 	console.log(i);
// 	if(i===3)
//     {
// 		break;
// 	}
// 	i++;
// }

// let j=1;
// do 
// {
// 	console.log(j);
// 	if(j===3) 
//     {
// 		break;
// 	}
// 	j++;
// } while(j<=5);

// Output:
// 1
// 2
// 3
// 1
// 2
// 3


// for(let i=0;i<11;i++) 
// {
// 	if(i%2==0)
//         continue;
// 	console.log(i);
// }
// Output:
// 1
// 3
// 5
// 7
// 9


let i=0;
while(i<11) 
{
	i++;
	if(i%2==0)
        continue;
	console.log(i);
}
// Output:
// 1
// 3
// 5
// 7
// 9
// 11



