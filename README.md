Simple stream analyzer.

Its purpose is to calculate the information carried by the new stream with respect to prior knowledge: I[ New | Priori ] .
This is done by calculating -log2(P(New | Priori)), where P(New | Priori) is assumed to be equal to Prod_i (P_priori_i (New_i)).

An example of use for evaluate chord's surprise:
<img width="1914" height="530" alt="immagine" src="https://github.com/user-attachments/assets/9e6f63c9-f8ec-4fb3-a79d-f09cf5d262a1" />

In left side complete stream, in right new stream. Press evaluate and script will calculate Info. :-)
