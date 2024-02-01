<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="assets/css/style.css">
    <title>Pips Income Calculator</title>
</head>
<body>
    <div class="container">
        <table class="glass">
            <thead>
                <th>Price</th>
                <th>Sell</th>
                <th>Buy</th>
            </thead>
            <tbody>
                <tr>
                    <td>Starting</td>
                    <td><input type="number" id="SS" value=110.22></td>
                    <td><input type="number" id="SB" value=110.25></td>
                </tr>

                <tr>
                    <td>End</td>
                    <td><input type="number" id="ES" value=110.48></td>
                    <td><input type="number" id="EB" value=110.51></td>
                </tr>

                <thead>
                    <tr>
                        <th></th>
                        <th>Lot</th>
                        <th>Contract</th>
                    </tr>
                </thead>

                <tr>
                    <td>Size</td>
                    <td><input type="number" id="LS" value=1></td>
                    <td><input type="number" id="CS" value=100000></td>
                </tr>
            </tbody>
        </table>

        <div class="glass" id="layoutQuotedCurrency">
            <label>
                <input type="radio" name="quotedCurrency" value="d" onchange="handleQuotedCurrencyRadioChange(this)">Direct
            </label>

            <label>
                <input type="radio" name="quotedCurrency" value="i" onchange="handleQuotedCurrencyRadioChange(this)">Indirect
            </label>
        </div>

        <div class="hide glass" id="layoutRadioAction">
            <label>
                <input type="radio" name="action" value="b" onchange="handleActionRadioChange(this)">Buy (long)
            </label>
            <label>
                <input type="radio" name="action" value="s" onchange="handleActionRadioChange(this)">Sell (short)
            </label>
        </div>

        <table class="price-table glass" id="priceTable">
            <tbody>
                <tr id="firstRow"></tr>
                <tr id="secondRow"></tr>
            
            </tbody>
        </table>

    

        <div class="quoted-currency hide glass" id="layoutDirect">
            
        <h1>Reward</h1>     
            <h1 id="dTotal"></h1>
        </div>

        <div class="quoted-currency hide glass"  id="layoutIndirect">
            <h1>Reward</h1>     
            
            <h1 id="iTotal"></h1>
        </div>
    </div>
    <script src="assets/js/main.js"></script>

</body>

</html>