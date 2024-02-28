const jogada1 = "perda";
const jogada2 = "ganha";

if (jogada1 === jogada2) {
    console.log("Empate");
} else {
    if (jogada1 === "pedra") {
        if (jogada2 === "tesoura") {
            console.log("Pedra ganhou");
        } else {
            console.log("Papel ganhou");
        }
    } else if (jogada1 === "tesoura") {
        if (jogada2 === "pedra") {
            console.log("Pedra ganhou");
        } else {
            console.log("Tesoura ganhou");
        }
    } else {
        if (jogada2 === "tesoura") {
            console.log("Pedra ganhou");
        } else if (jogada2 === "papel") {
            console.log("Papel ganhou");
        } else {
            console.log("Tesoura ganhou");
        }
    }
}











// if (jogada1 === jogada2) {
//     console.log("Empate")
// } else {
//     if (jogada1 === "pedra") {
//         if (jogada2 === "tesoura")
//             console.log("Pedra ganhou");
//         } else {
//             console.log("Papel ganhou");
//         } else {
//             console.log("papel ganhou");
//         }
//       else if (jogada1 === "papel") {
//         if (jogada2 === "pedra")
//             console.log("Papel ganhou");
//         } else {    
//             console.log("Tesoura ganhou");
//         }
        
//     } else if (jogada1 === "tesoura") {
//         if (jogada2 === "pedra") {
//             console.log("Tesoura ganhou");
//         } else {
//             console.log("Papel ganhou");
//         }

//     }






//         if (jogada1 === "papel") {
//             if (jogada2 === "pedra")
//             console.log("Papel ganhou");
//         } else {
//             console.log("Tesoura ganhou");
//         }
//     }  if(jogada1 ==="tesoura") {
//         if (jogada2 === "pedra") {
//             console.log("tesoura ganhou");
//                 if (jogada2 === "tesoura")
//                     console.log("tesoura ganhou");
//                 } else {
//                     console.log("Papel ganhou");
//                 }
//        else {

//        } 
//     }
// }