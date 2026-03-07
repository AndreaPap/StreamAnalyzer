Simple stream analyzer.

Its purpose is to calculate the information carried by the new stream with respect to prior knowledge:  
I[ New | Prior ]

This is done by calculating:  
-log2( P( New | Prior ) )  
Where P( New | Prior ) is assumed to be equal to Prod_i ( P_prior_i( New_i ) ).

An example of use for evaluate chord's surprise:

<img width="1919" height="939" alt="immagine" src="https://github.com/user-attachments/assets/66c6e8ba-4b1e-4ce6-bc1c-4391ec05fdaf" />


In left side complete stream, in right new stream. Press evaluate or Enter in new textarea and script will calculate Info. :-)
