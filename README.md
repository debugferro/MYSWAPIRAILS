# README

Faça o clone do código:

    $ git clone git@github.com:debugferro/MYSWAPIRAILS.git

Execute:

    $ bundle install
    $ yarn install
    $ rails webpacker:install && rails webpacker:install:react

**ATENÇÃO: SE PERGUNTADO, NÃO SOBRESCREVER ARQUIVOS EXISTENTES.**
    
Caso queira popular/atualizar a aplicação com dados da SWAPI, execute a rake task:

    $ rake myswapigem:populate
    
Para executar o servidor:

    $ rails s
    
E em um segundo terminal execute:

    $ ./bin/webpack-dev-server





