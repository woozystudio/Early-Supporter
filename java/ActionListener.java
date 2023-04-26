public class TestJFrame {
    private static JFrame frame = new JFrame();
    private static JLabel label = new JLabel();
    private static JButton buttons[] = new JButton[4];

    private static int[][] location = new int[3][4];


    public static void main(String args[]){
        frame.getInsets().set(20, 5, 5, 5);

        frame.setLayout(null);
        frame.setPreferredSize(new Dimension(507, 528));
        frame.pack();
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setTitle("Test");

        buttons[0] = new JButton("jbZero");
        buttons[1] = new JButton("jbOne"); 
        buttons[2] = new JButton("jbTwo");
        buttons[3] = new JButton("jbThree");

        frame.add(buttons[0]);
        frame.add(buttons[1]);
        frame.add(buttons[2]);
        frame.add(buttons[3]);

        setButtons();
        frame.setVisible(true);

        buttons[0].setLocation(100, 100);
    }
}

public class TestJFrame {
    private static JFrame frame = new JFrame();
    private static JLabel label = new JLabel();
    private static JButton buttons[] = new JButton[4];

    private static int[][] location = new int[3][4];


    public static void main(String args[]){
        frame.getInsets().set(20, 5, 5, 5);

        frame.setLayout(null);
        frame.setPreferredSize(new Dimension(507, 528));
        frame.pack();
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setTitle("Test");

        buttons[0] = new JButton("jbZero");
        buttons[1] = new JButton("jbOne"); 
        buttons[2] = new JButton("jbTwo");
        buttons[3] = new JButton("jbThree");

        frame.add(buttons[0]);
        frame.add(buttons[1]);
        frame.add(buttons[2]);
        frame.add(buttons[3]);

        setButtons();
        frame.setVisible(true);

        buttons[0].setLocation(100, 100);
    }
}