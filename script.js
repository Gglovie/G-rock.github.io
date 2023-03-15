window.addEventListener("load", ()=>{

    const feedbackCard = document.querySelector(".container");
    const thankYouModal = document.querySelector(".thank-you-container");
    thankYouModal.classList.add("display-none");





    // This Code Section is for when the user wants to choose within any of the given choices

    let feedbackNumberContainer = feedbackCard.querySelector(".numbers");
    let feedbackNumbers = feedbackNumberContainer.querySelectorAll(".btn");
    let numberChosenContainer = document.querySelector("#numberChosen");
    let numberChosenValue = null;

    feedbackNumbers.forEach( (feedbackNumber, index)=>
    {

        feedbackNumber.addEventListener("click", ()=>
        {
            let num = index +1;
            numberChosen = feedbackNumber.innerHTML;
            feedbackNumber.classList.add("active");
            numberChosenContainer.setAttribute("value", num);
            numberChosenValue = numberChosenContainer.getAttribute("value");

            if ( numberChosen === "1" )
            {

                if ( feedbackNumbers[1].classList.contains("active") || feedbackNumbers[2].classList.contains("active") || feedbackNumbers[3].classList.contains("active") || feedbackNumbers[4].classList.contains("active") )
                {
                    feedbackNumbers[1].classList.remove("active");
                    feedbackNumbers[2].classList.remove("active");
                    feedbackNumbers[3].classList.remove("active");
                    feedbackNumbers[4].classList.remove("active");
                    feedbackNumbers[1].classList.remove("semi_active");
                    feedbackNumbers[2].classList.remove("semi_active");
                    feedbackNumbers[3].classList.remove("semi_active");
                    feedbackNumbers[4].classList.remove("semi_active");
                }

            }

            else if ( numberChosen === "2" )
            {
                feedbackNumbers[0].classList.add("semi_active");

                if (feedbackNumbers[0].classList.contains("active") || feedbackNumbers[2].classList.contains("active") || feedbackNumbers[3].classList.contains("active") || feedbackNumbers[4].classList.contains("active") )
                {
                    feedbackNumbers[0].classList.remove("active") ||
                    feedbackNumbers[2].classList.remove("active");
                    feedbackNumbers[3].classList.remove("active");
                    feedbackNumbers[4].classList.remove("active");
                    feedbackNumbers[2].classList.remove("semi_active");
                    feedbackNumbers[3].classList.remove("semi_active");
                    feedbackNumbers[4].classList.remove("semi_active");
                }

            }

            else if ( numberChosen === "3" )
            {
                feedbackNumbers[1].classList.add("semi_active");

                if (feedbackNumbers[0].classList.contains("active") || feedbackNumbers[1].classList.contains("active") || feedbackNumbers[3].classList.contains("active") || feedbackNumbers[4].classList.contains("active") )
                {
                    feedbackNumbers[0].classList.remove("semi_active");
                    feedbackNumbers[0].classList.remove("active");
                    feedbackNumbers[1].classList.remove("active");
                    feedbackNumbers[3].classList.remove("active");
                    feedbackNumbers[4].classList.remove("active");
                    feedbackNumbers[3].classList.remove("semi_active");
                    feedbackNumbers[4].classList.remove("semi_active");
                }


            }

            else if ( numberChosen === "4" )
            {
                feedbackNumbers[2].classList.add("semi_active");

                if (feedbackNumbers[0].classList.contains('active')|| feedbackNumbers[1].classList.contains("active") || feedbackNumbers[2].classList.contains("active") || feedbackNumbers[3].classList.contains("active") || feedbackNumbers[4].classList.contains("active") )
                {
                    feedbackNumbers[0].classList.remove('active')
                    feedbackNumbers[1].classList.remove("active");
                    feedbackNumbers[2].classList.remove("active");
                    feedbackNumbers[4].classList.remove("active");
                    feedbackNumbers[0].classList.remove("semi_active");
                    feedbackNumbers[1].classList.remove("semi_active");
                    feedbackNumbers[4].classList.remove("semi_active");
                }


            }

            else if ( numberChosen === "5" )
            { 
                feedbackNumbers[3].classList.add("semi_active");

                if (feedbackNumbers[0].classList.contains('active')|| feedbackNumbers[1].classList.contains("active") || feedbackNumbers[2].classList.contains("active") || feedbackNumbers[3].classList.contains("active") || feedbackNumbers[4].classList.contains("active") )
                {
                    feedbackNumbers[0].classList.remove('active')
                    feedbackNumbers[1].classList.remove("active");
                    feedbackNumbers[2].classList.remove("active");
                    feedbackNumbers[3].classList.remove("active");
                    feedbackNumbers[0].classList.remove("semi_active");
                    feedbackNumbers[1].classList.remove("semi_active");
                    feedbackNumbers[2].classList.remove("semi_active");
                }
            }


        });
    });
    let submitButton = feedbackCard.querySelector("#submit");

    submitButton.addEventListener("click", ()=>
    {

        if ( numberChosenValue != null )
        {

            function loadAndCloseThankYouModal(numberChosenValue)
            {
                thankYouModal.classList.remove("display-none");
                console.log(numberChosenValue);
                thankYouModal.querySelector("#numberSelected").innerHTML = numberChosenValue;
                feedbackCard.classList.add("display-none");
            }

            setTimeout( loadAndCloseThankYouModal(numberChosenValue) , 5000 );


        }
        else
        {
            alert('Please rate our website')
        }

    });
    
});