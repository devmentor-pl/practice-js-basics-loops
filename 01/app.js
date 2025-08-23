const randomNumber = Math.round(Math.random() * 20);

if (randomNumber >= 5) {
	for (let i = 5; i < randomNumber; i++) {
		console.log('wcześniejsza liczba to: ' + i);
	}
} else {
	console.log('ta liczba jest zbyt mała, aby pętla zadziałała!');
}

console.log('wylosowana liczba to: ' + randomNumber);
