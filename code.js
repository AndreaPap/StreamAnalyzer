class System
{
    constructor()
    {

    }

    EventInit()
    {
        let Element;
        let App = document.getElementById( "App" );
        App.innerHTML = "";
        App.className = "AppStyle";

        Element = document.createElement( "span" );
        Element.className = "HeaderStyle";
        Element.textContent = "Priori stream";
        App.append( Element );

        Element = document.createElement( "span" );
        Element.className = "HeaderStyle";
        Element.textContent = "Stream";
        App.append( Element );

        Element = document.createElement( "textarea" );
        Element.id = "PrioriStream";
        Element.className = "CellStyle";
        App.append( Element );

        Element = document.createElement( "textarea" );
        Element.id = "Stream";
        Element.className = "CellStyle";
        Element.addEventListener( "keydown", 
            ( event ) => 
            {
                if (event.key === "Enter") 
                {
                    event.preventDefault(); // evita newline nella textarea
                    this.EventEvaluate();
                }
            }
        );
        App.append( Element );

        Element = document.createElement( "span" );
        Element.className = "HeaderStyle";
        Element.textContent = "Event info";
        App.append( Element );

        Element = document.createElement( "span" );
        Element.className = "HeaderStyle";
        Element.textContent = "Stream info";
        App.append( Element );

        Element = document.createElement( "textarea" );
        Element.id = "OutputSingle";
        Element.className = "CellStyle";
        App.append( Element );

        Element = document.createElement( "textarea" );
        Element.id = "OutputStream";
        Element.className = "CellStyle";
        App.append( Element );

        Element = document.createElement( "button" );
        Element.id = "EvaluateButton";
        Element.className = "ButtonStyle";
        Element.textContent = "Evaluate";
        Element.onclick = () => this.EventEvaluate();
        App.append( Element );

        Element = document.createElement( "button" );
        Element.className = "ButtonStyle";
        Element.textContent = "Reset";
        Element.onclick = () => this.EventInit();
        App.append( Element );
    }

    EventEvaluate()
    {
        alert( "click" );
        let PrioriP = this.EventStream2P( "PrioriStream" );

        document.getElementById( "OutputSingle" ).value = "";
        for( let Event in PrioriP )
        {
            document.getElementById( "OutputSingle" ).value +=
                Event + ": " + -Math.log2( PrioriP[ Event ] ).toFixed( 3 ) + " [bit]\t";
        }

        if( document.getElementById( "Stream" ).value != "" )
        {
            document.getElementById( "OutputStream" ).value += document.getElementById( "Stream" ).value.toLowerCase() + ": " +
                -Math.log2( this.EventMeasureStream( PrioriP, "Stream" ) ).toFixed( 3 ) + " [bit]\t";

            document.getElementById( "Stream" ).value = "";
        }

        document.getElementById( "PrioriStream" ).readOnly = true;
        document.getElementById( "PrioriStream" ).style.backgroundColor = "palegreen";
        document.getElementById( "PrioriStream" ).style.color = "firebrick";
        
    }

    EventStream2P( TextAreaStream )
    {
        let P = {};
        Stream = document.getElementById( TextAreaStream ).value.toLowerCase().match(/\b[\wàèéìòù]+\b/g) || [];
        let Norm = Stream.length;

        for( let Event of Stream )
        {
            P[ Event ] = ( P[ Event ] || 0 ) + ( 1 / Norm );
        } 
        return P;
    }

    EventMeasureStream( P, TextAreaStream )
    {
        let TotP = 1;
        Stream = document.getElementById( TextAreaStream ).value.toLowerCase().match(/\b[\wàèéìòù]+\b/g) || [];
        for( let Event of Stream )
        {
            TotP *= P[ Event ];
        } 
        return TotP;
    }
}

let PageSystem = new System();
PageSystem.EventInit();