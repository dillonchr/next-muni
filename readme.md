<img src="https://www.sfmta.com/sites/default/files/teaser-images/2017/12/muni_logo_sq.jpg" alt="SF Muni Logo" height="300"/>

# When's the next bus?
Simple module that returns preconfigured routes. Currently set up for several very ephemeral routes for my stay in SF. And at the moment this branch is configured to have its output piped to tmux's status bar.

<img src="https://i.imgur.com/EibDixy.png" alt="example of tmux status" width="500"/>

## TMUX instructions
Assuming you're using my .tmux setup. So here's what maglev should look like once you've added muni.
```bash
$ cat ~/.tmux/plugins/maglev/maglev.tmux|grep muni
status_right="$status_right #(node $HOME/git/muni/muni.js) "
$
```
