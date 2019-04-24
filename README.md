## Automation tests

For the automation I use jasmine and to run it you just need to open the Test_Task.html

versions:
```
jasmine -v
jasmine v2.8.0
jasmine-core v2.8.0
```
```
npm -v
5.5.1
```

---

## Set up

In the Test_Task.html you need to add the following lines

After the Head tag
![After head][afterHead]
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.8.0/jasmine.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.8.0/jasmine.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.8.0/jasmine-html.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.8.0/boot.min.js"></script>
```

After the body tag
![After body][afterBody]
```html
<script src="jasmine/src/Test_TaskPage.js"></script>
<script src="jasmine/src/functions.js"></script>
<script src="jasmine/spec/tests.js"></script>
```

[afterBody]: /afterBody.PNG "afterBody"
[afterHead]: /afterHead.PNG "afterHead"


---

## Tests cases

1. Verify if the balance decrease 1 when the user hit the spin button
2. Verify if the amount increase when user won
3. Verify all possible sequence combination in order to win the prize
4. Verify if the use can still play with less then 0 ticket.
5. Verify if the user can win if the top or botton row hit the sequence
6. Verify if non-sequence combination can win the prize

--- 

## Tests results

69 specs, 19 failures

failed Scenario:

The user cannot play with amount <= 0

    The amount should be 0

Verify consecutive combinations to win

	* The user should win with the combination x111x
	* The user should win with the combination xx111
	* The user should win with the combination x1111
	* The user should win with the combination 222xx
	* The user should win with the combination x222x
	* The user should win with the combination xx222
	* The user should win with the combination x2222
	* The user should win with the combination x333x
	* The user should win with the combination xx333
	* The user should win with the combination x3333
	* The user should win with the combination x444x
	* The user should win with the combination xx444
	* The user should win with the combination 4444x
	* The user should win with the combination x4444
	* The user should win with the combination x555x
	* The user should win with the combination xx555
	* The user should win with the combination x5555
	* The user should win with the combination 55555