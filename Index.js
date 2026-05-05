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
    "key": "YOUR_RAZORPAY_KEY",
    "amount": amount * 100,
    "currency": "INR",
    "name": "Prowestor",
    "description": planName,
    "handler": function (response) {

      alert("Payment Successful!");

      // 🔔 SEND DATA TO SERVER
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
    "prefill": {
      "name": userName
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}
function showPlans() {
  let id = document.getElementById("userId").value;
  let name = document.getElementById("userName").value;

  if (!id || !name) {
    alert("Fill details");
    return;
  }

  document.getElementById("plans").classList.remove("hidden");
}

function pay(amount, plan) {

  let options = {
    "key": "YOUR_RAZORPAY_KEY",
    "amount": amount * 100,
    "currency": "INR",
    "name": "Prowestor",
    "description": plan,

    "handler": function (response) {
      alert("Payment Success");

      // send to backend
      fetch("save.php", {
        method: "POST",
        body: JSON.stringify({
          payment_id: response.razorpay_payment_id,
          plan: plan
        })
      });
    }
  };

  let rzp = new Razorpay(options);
  rzp.open();
}