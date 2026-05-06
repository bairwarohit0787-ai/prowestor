function showPlans() {
  const userId = document.getElementById("userId").value;
  const userName = document.getElementById("userName").value;

  if (!userId || !userName) {
    alert("Enter details first");
    return;
  }

  document.getElementById("plans").classList.remove("hidden");
}

function pay(amount, planName) {
  const userId = document.getElementById("userId").value;
  const userName = document.getElementById("userName").value;

  var options = {
    key: "YOUR_RAZORPAY_KEY",
    amount: amount * 100,
    currency: "INR",
    name: "Prowestor",
    description: planName,

    handler: function (response) {
      alert("Payment Successful!");

      // Send data to backend
      fetch("save.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: userId,
          userName: userName,
          plan: planName,
          paymentId: response.razorpay_payment_id
        })
      });
    },

    prefill: {
      name: userName
      function showOptions() {
  let userId = document.getElementById('userId').value;
  let name = document.getElementById('name').value;

  if(userId === '' || name === ''){
    alert('Please fill all details');
    return;
  }

  document.getElementById('loginBox').style.display = 'none';
  document.getElementById('options').classList.remove('hidden');
}

function buy(item) {
  alert('You selected: ' + item + '\nProceed to payment');
}
if(name == "" || phone == "") {
  alert("Please fill all details");
}
