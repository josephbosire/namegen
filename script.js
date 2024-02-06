document.getElementById('logoPromptForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    // Collect selected options
    const superpower = document.querySelector('input[name="superpower"]:checked').value;
    const mascot = document.querySelector('input[name="mascot"]:checked').value;
    const spiritAnimal = document.querySelector('input[name="spiritAnimal"]:checked').value;
    const quirkiness = document.querySelector('input[name="quirkiness"]:checked').value;
    const punchline = document.querySelector('input[name="punchline"]:checked').value;

    // Construct the prompt
    const prompt = `Create a logo for a team that ${superpower}, symbolized by ${mascot}, embodies the spirit of ${spiritAnimal}, with a quirkiness level of "${quirkiness}", and can be humorously described as "${punchline}".`;

    // Display or use the prompt
    document.getElementById('promptResult').innerText = prompt;
});

