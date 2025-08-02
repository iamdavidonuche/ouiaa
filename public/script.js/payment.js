// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('transcriptRequestForm');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const checkboxes = document.querySelectorAll('.transcriptService:checked');
//         let totalAmount = 0;
//         checkboxes.forEach(cb => {
//             totalAmount += parseInt(cb.value);
//         });

//         if (totalAmount === 0) {
//             alert("Please select at least one transcript service.");
//             return;
//         }

//         // Set amount in hidden input
//         document.getElementById('amount').value = totalAmount;

//         const formData = new FormData(form);
//         const formObject = Object.fromEntries(formData.entries());

//         fetch('/apply-transcript', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formObject)
//         })
//         .then(res => res.json())
//         .then(data => {
//             if (data.redirectUrl) {
//                 window.location.href = data.redirectUrl;
//             }
//         })
//         .catch(err => {
//             console.error('Error:', err);
//             alert('Something went wrong. Try again.');
//         });
//     });
// });
