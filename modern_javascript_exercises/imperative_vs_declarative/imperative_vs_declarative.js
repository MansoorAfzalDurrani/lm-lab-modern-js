// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
    
  return  passwords.filter((char) => char.length > 9);
}
