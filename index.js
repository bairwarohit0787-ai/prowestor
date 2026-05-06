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
      body {
  font-family: Arial;
  background: #0b1e2d;
  color: white;
  text-align: center;
}

.container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}

.card {
  background: #122f4a;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 15px;
}

input {
  width: 90%;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  border: none;
}

button {
  padding: 10px 20px;
  background: #00b894;
  border: none;
  border-radius: 8px;
  color: white;
}

.pack {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  background: #1f4d73;
  border-radius: 8px;
}

.hidden {
  display: none;
}
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}
document.getElementById('continueBtn').addEventListener('click', function() {
    alert('Recharge system connect ho raha hai...');
    // Agar aap kisi doosre page par bhejna chahte hain:
    // window.location.href = "recharge.html"; 
});
