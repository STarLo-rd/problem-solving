function subSequence(p: string, up: string): void {
  if (up.length == 0) {
    console.log(p);
    return;
  }

  let firstLetter = up.charAt(0);
  subSequence(p + firstLetter, up.substring(1));
  subSequence(p, up.substring(1));
}

subSequence("", "star");
