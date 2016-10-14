function reverseNumber() {
  boolean isNegativeInt = x < 0;

  if (isNegativeInt)
    x *= -1;

    int result = 0;
    int tmp = x;
    while (true) {
    int digit = tmp%10;
    result = result * 10 + digit;
    tmp /=10;
    if (tmp == 0)
        break;
}

    if (isNegativeInt)
    result *= -1;

    return result;
}

reverseNumber();
