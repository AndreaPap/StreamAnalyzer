Simple stream analyzer.

Its purpose is to calculate the information carried by the new stream with respect to prior knowledge:  
I[ New | Prior ]

This is done by calculating:  
-log2( P( New | Prior ) )  
Where P( New | Prior ) is assumed to be equal to Prod_i ( P_prior_i( New_i ) ).

An example of use for evaluate chord's surprise:

<img width="1916" height="937" alt="immagine" src="https://github.com/user-attachments/assets/3c2411c6-fbf9-4298-bd71-28684f190a83" />

In left side complete stream, in right sub stream to evaluate. Press evaluate or Enter in extarea and script will calculate Info. :-)
