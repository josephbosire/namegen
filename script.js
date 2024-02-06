document.getElementById('logoPromptForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    // Collect selected options
    const superpower = document.querySelector('input[name="superpower"]:checked').value;
    const mascot = document.querySelector('input[name="mascot"]:checked').value;
    const spiritAnimal = document.querySelector('input[name="spiritAnimal"]:checked').value;
    const quirkiness = document.querySelector('input[name="quirkiness"]:checked').value;
    const punchline = document.querySelector('input[name="punchline"]:checked').value;

    // Construct the logo prompt
    const prompt = `Create a mascot for a team that ${superpower}, symbolized by ${mascot}, embodies the spirit of ${spiritAnimal}, with a quirkiness level of "${quirkiness}", and can be humorously described as "${punchline}". skip stuff that violates content policy`;

    // Construct the team name prompt

    const prompt2 = `Give me a list of 4 team names that ${superpower}, symbolized by ${mascot}, embodies the spirit of ${spiritAnimal}, with a quirkiness level of "${quirkiness}", and can be humorously described as "${punchline}". Make then shorter and able to have acronyms`;

    // Display or use the prompt
    document.getElementById('promptResult').innerText = prompt;
    document.getElementById('promptResult2').innerText = prompt2;
});

