public class accept extends ListenerAdapter {
    public void onreactionAdded(MessageReactionAddEvent event) {

        MessageReaction reaction = event.getReaction();
        ReactionEmote emote = reaction.getReactionEmote();
        MessageChannel channel = event.getChannel();
        System.out.println("test");
        channel.sendMessage("Commands:\n !notify - notifies users who have subscribed to mailing list").queue();
    }
}