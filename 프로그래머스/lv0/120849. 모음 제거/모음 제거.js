const solution = my_string => {
    const vowel = ['a','e','i','o','u'];
    return [...my_string].filter(v => !vowel.includes(v)).join('');
}