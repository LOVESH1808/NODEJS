# NO. REQUESTS T0 SEND
REQUESTS=10

# URL TO YOUR LOAD BALANCER
URL="http://localhost:3000"

# LOOP TO SEND REQUETS
for((i=1;i<=REQUESTS;i++));  do
    curl $URL &
done

wait
echo "All requests have been sent"