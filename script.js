document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
      alert('Please enter your birthdate.');
      return;
    }
  
    const birthDateObj = new Date(birthdate);
    const today = new Date();
  
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    const dayDiff = today.getDate() - birthDateObj.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    document.getElementById('result').textContent = `Your age is ${age} years.`;
  });

  